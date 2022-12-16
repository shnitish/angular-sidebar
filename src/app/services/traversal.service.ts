import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TraversalService {
  constructor() {}

  public addFileFolder(tree: any, folderId: any, item: any, isFolder: any) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    const updatedItems = tree.items.map((itemObj: any) => {
      return this.addFileFolder(itemObj, folderId, item, isFolder);
    });

    return { ...tree, item: updatedItems };
  }

  public deleteFileFolder(tree: any, folderId: any) {
    if (tree.id === folderId) {
      return {};
    }

    const updatedItems = tree.items.map((obj: any) => {
      return this.deleteFileFolder(obj, folderId);
    });

    return { ...tree, item: updatedItems };
  }
}
