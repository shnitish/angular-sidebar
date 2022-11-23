import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TraversalService } from "../../services/traversal.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() sidebarData: any;

  public expanded: boolean = false;
  public showInput: { isVisible: boolean, isFolder: null | boolean } = { isVisible: false, isFolder: null };

  constructor(private traversalService: TraversalService ) {}

  public onExpanded() {
    this.expanded = !this.expanded;
  }

  public onAddButton($event: any, isFolder: boolean) {
    $event.stopPropagation();

    this.expanded = true;
    this.showInput.isVisible = true;
    this.showInput.isFolder = isFolder;
  }
  
  public onAddFolder($event: any) {
    if($event.keyCode === 13 && $event.target.value ) {
      const updatedTree = this.traversalService.traverseTree(this.sidebarData, this.sidebarData.id, $event.target.value, this.showInput.isFolder);

      this.sidebarData = updatedTree;
      this.showInput.isVisible = false;
    }
  }

  public focusOut() {
    this.showInput.isVisible = false;
  }
}
