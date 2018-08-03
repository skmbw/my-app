// import { Observable } from 'rxjs';

import {Observable} from 'rxjs/Observable';

export namespace helloworld {

  export interface ClientFactory {
    getGreeter(): helloworld.Greeter;
  }

  export interface ServerBuilder {
    addGreeter(impl: helloworld.Greeter): helloworld.ServerBuilder;
  }

  export interface Greeter {
    sayHello(request: helloworld.HelloRequest): Observable<helloworld.HelloReply>;
  }

  export interface HelloRequest {
    name?: string;
  }

  export interface HelloReply {
    message?: string;
  }

}
