abstract class Bundel {
  protected parent!: Bundel | null;
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  public setParent(parent: Bundel | null) {
    this.parent = parent;
  }

  public getParent(): Bundel | null {
    return this.parent;
  }

  public add(bundle: Bundel): void {}
  public remove(bundle: Bundel): void {}

  public isParentBundle(): boolean {
    return false;
  }

  public getName(): string {
    return this.name;
  }

  public abstract operation(): string;
}

class LeafBundel extends Bundel {
  public books: Array<string> = [];
  constructor(name: string) {
    super(name);
  }
  public operation(): string {
    return "leafBundel";
  }
  public setBooks(book: Array<string>): void {
    this.books.push(...book);
  }
  public getBooks(): Array<string> {
    return this.books;
  }
}

class ParentBundle extends Bundel {
  public leafs: Map<string, Bundel> = new Map();

  constructor(name: string) {
    super(name);
  }

  public add(bundle: Bundel): void {
    this.leafs.set(bundle.getName(), bundle);
    bundle.setParent(this);
  }
  public remove(bundle: Bundel): void {
    // const bundleIndex = this.leafs.indexOf(bundle);
    this.leafs.delete(bundle.getName());
    bundle.setParent(null);
  }
  public isParentBundle(): boolean {
    return true;
  }
  public operation(): string {
    const leafBundleSplit: Array<Bundel> = [];
    this.leafs.forEach((leaf) => {
      leafBundleSplit.push(leaf);
    });
    return `LeafBundleHead(${leafBundleSplit.map((leaf) => leaf.getName()).join('+')})`;
  }

 
  public setBooksForLeaf(name: string, books: Array<string>): void {
    const leaf = this.leafs.get(name);
    if (leaf instanceof LeafBundel) {
      leaf.setBooks(books);
    } else {
      console.log("No LeafBundel found with the given name.");
    }
  }

 
  public getBooksFromLeaf(name: string): Array<string> {
    const leaf = this.leafs.get(name);
    if (leaf instanceof LeafBundel) {
      return leaf.getBooks();
    } else {
      console.log("No LeafBundel found with the given name.");
      return [];
    }
  }

  // Get all subleaves or branches
  public getAllSubBundles(): Array<string> {
    return Array.from(this.leafs.keys());
  }
}

// const tree = new ParentBundle('tree');
// const leaf = new LeafBundel('leaf1');
// tree.add(new LeafBundel('leaf2'));
// tree.add(new LeafBundel('leaf3'));
// tree.add(leaf);
// const branch1 = new ParentBundle('branch1');
// branch1.add(new LeafBundel('leaf4'));
// branch1.add(new LeafBundel('leaf5'));
// tree.add(branch1);
// console.log(tree);
// tree.setBooksForLeaf('leaf1', ['book1', 'book2']);
// console.log(tree)

export {ParentBundle, LeafBundel};


