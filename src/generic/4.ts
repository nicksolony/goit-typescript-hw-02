/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Component<T> {
  props: T;
  pageInfo(): void;
}

class Page<T> implements Component<T> {
  props: T & {
    title: string;
  };

  // constructor(props: T) {
  //   this.props = props;
  // };

  pageInfo () {
    console.log(this.props.title);
  }
}

export {};