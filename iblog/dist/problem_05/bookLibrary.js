"use strict";
class Bundel {
    parent;
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    add(bundle) { }
    remove(bundle) { }
    isParentBundle() {
        return false;
    }
}
class LeafBundel extends Bundel {
    operation() {
        return "leafBundel";
    }
    getBooks() {
        return ["new Book"];
    }
}
class ParentBundle extends Bundel {
    leafs = [];
    add(bundle) {
        this.leafs.push(bundle);
        bundle.setParent(this);
    }
    remove(bundle) {
        const bundleIndex = this.leafs.indexOf(bundle);
        this.leafs.splice(bundleIndex, 1);
        bundle.setParent(null);
    }
    isParentBundle() {
        return true;
    }
    operation() {
        const leafBundleSplit = [];
        for (let leaf of this.leafs) {
            leafBundleSplit.push(leaf);
        }
        return `LeafBundleHead ${leafBundleSplit.join()}`;
    }
}
const tree = new ParentBundle();
tree.add(new LeafBundel());
tree.add(new LeafBundel());
const branch1 = new ParentBundle();
branch1.add(new LeafBundel());
branch1.add(new LeafBundel());
tree.add(branch1);
console.log(tree);
// function clientCode(component: Component) {
//     console.log(`RESULT: ${component.operation()}`);
// }
// const simple = new Leaf();
// console.log('Client: I\'ve got a simple component:');
// clientCode(simple);
// console.log('');
// const tree = new Composite();
// const branch1 = new Composite();
// branch1.add(new Leaf());
// branch1.add(new Leaf());
// const branch2 = new Composite();
// branch2.add(new Leaf());
// tree.add(branch1);
// tree.add(branch2);
// console.log('Client: Now I\'ve got a composite tree:');
// clientCode(tree);
// console.log('');
// function clientCode2(component1: Component, component2: Component) {
//     if (component1.isComposite()) {
//         component1.add(component2);
//     }
//     console.log(`RESULT: ${component1.operation()}`);
// }
// console.log('Client: I don\'t need to check the components classes even when managing the tree:');
// clientCode2(tree, simple);
