import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-todo-paginator',
  templateUrl: './todo-paginator.component.html',
  styleUrls: ['./todo-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPaginatorComponent implements OnChanges {
  @Input()
  public offset = 0;
  @Input()
  public limit = 1;
  @Input()
  public size = 1;
  @Input()
  public range = 4;

  @Output()
  public pageChange: EventEmitter<number> = new EventEmitter<number>();

  private pages: Observable<Array<number>>;
  private currentPage: number;
  private totalPages: number;

  constructor() {
  }

  public ngOnChanges(): void {
    this.getPages(this.offset, this.limit, this.size);
  }

  private getPages(offset: number, limit: number, size: number): void {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);

    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }

    this.pages = Observable.range(-this.range, this.range * 2 + 1)
      .map(oft => this.currentPage + oft)
      .filter(page => this.isValidPageNumber(page, this.totalPages))
      .toArray();
  }

  private getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  private getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  private isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  private selectPage(page: number): void {
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit((page - 1) * this.limit);
    }
  }
}
