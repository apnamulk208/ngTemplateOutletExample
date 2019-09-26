import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CardItemDirective } from '../carditem.directive';
import { ListItemDirective } from '../listitem.directive';

@Component({
  selector: 'card-or-list-view',
  templateUrl: './card-or-list-view.component.html'
})
export class CardOrListViewComponent {

  @Input() items: any[] = [];

  @Input() mode: 'card' | 'list' | 'template' = 'card';

  @ContentChild('applyBtn') applyBtn: TemplateRef<any>;


  rowData = {
    songName: 'about this',
    type: 'MP4'
  }

  // Read in our structural directives as TemplateRefs
  @ContentChild(CardItemDirective, { read: TemplateRef }) cardItemTemplate;
  @ContentChild(ListItemDirective, { read: TemplateRef }) listItemTemplate;

}