interface MyInterface {
  doSomething(): Promise<void> | void;
}

class MyClass implements MyInterface {
  async doSomething(): Promise<void> {
    // This method is asynchronous, so it returns a Promise<void>
    await someAsyncOperation();
  }
}

class MyOtherClass implements MyInterface {
  doSomething(): void {
    // This method is synchronous, so it returns void
    someSyncOperation();
  }
}

const myObject: MyInterface = new MyClass();    
if (myObject.doSomething() instanceof Promise) {
  // This method returns a Promise<void>, so we need to use await
  await myObject.doSomething();
} else {
  // This method returns void, so we don't need to use await
  myObject.doSomething();
}
