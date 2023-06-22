import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {
  @Input() title: string = '';
  @Input() content: string = '';

  expanded: boolean = false;

  get headingClass(): string | null {
    if (this.expanded) {
      return 'accordion-item__white'
    }

    return null
  }

  get iconClass(): string | null {
    if (this.expanded) {
      return 'rotate-chevron'
    }

    return null
  }

  toggle():  void {
    this.expanded = !this.expanded;
  }
}
