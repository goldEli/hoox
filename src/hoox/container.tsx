type SubScriber<T> = (data: T) => void;

class Container<T = unknown> {
  data!: T;
  subScribers = new Set<SubScriber<T>>();
  notify() {
    for (const subscriber of this.subScribers) {
      subscriber(this.data);
    }
  }
}

export default Container;
