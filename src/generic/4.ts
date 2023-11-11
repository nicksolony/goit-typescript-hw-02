/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Iprops {
  title: string;
};

class Component<T> {
  constructor(public props: T) {
    
  }
};

class Page extends Component<Iprops> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};