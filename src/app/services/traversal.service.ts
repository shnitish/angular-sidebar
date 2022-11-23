import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraversalService {

  constructor() { }

  public traverseTree(tree: any, folderId: any, item: any, isFolder: any) {
    if(tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: []
      })
      return tree;
    }

    const updatedItems = tree.items.map((itemObj: any)=> {
      return this.traverseTree(itemObj, folderId, item, isFolder);
    })

    return {...tree, item: updatedItems };
  }
}
