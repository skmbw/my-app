import * as $protobuf from 'protobufjs';

/** Namespace helloworld. */
export namespace helloworld {

  /** Represents a Greeter */
  class Greeter extends $protobuf.rpc.Service {

    /**
     * Constructs a new Greeter service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Greeter service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Greeter;

    /**
     * Calls SayHello.
     * @param request HelloRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and HelloReply
     */
    public sayHello(request: helloworld.IHelloRequest, callback: helloworld.Greeter.SayHelloCallback): void;

    /**
     * Calls SayHello.
     * @param request HelloRequest message or plain object
     * @returns Promise
     */
    public sayHello(request: helloworld.IHelloRequest): Promise<helloworld.HelloReply>;

    /**
     * Calls SayMultiHello.
     * @param request MultiHelloRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and HelloReply
     */
    public sayMultiHello(request: helloworld.IMultiHelloRequest, callback: helloworld.Greeter.SayMultiHelloCallback): void;

    /**
     * Calls SayMultiHello.
     * @param request MultiHelloRequest message or plain object
     * @returns Promise
     */
    public sayMultiHello(request: helloworld.IMultiHelloRequest): Promise<helloworld.HelloReply>;
  }

  namespace Greeter {

    /**
     * Callback as used by {@link helloworld.Greeter#sayHello}.
     * @param error Error, if any
     * @param [response] HelloReply
     */
    type SayHelloCallback = (error: (Error | null), response?: helloworld.HelloReply) => void;

    /**
     * Callback as used by {@link helloworld.Greeter#sayMultiHello}.
     * @param error Error, if any
     * @param [response] HelloReply
     */
    type SayMultiHelloCallback = (error: (Error | null), response?: helloworld.HelloReply) => void;
  }

  /** Properties of a HelloRequest. */
  interface IHelloRequest {

    /** HelloRequest name */
    name?: (string | null);
  }

  /** Represents a HelloRequest. */
  class HelloRequest implements IHelloRequest {

    /**
     * Constructs a new HelloRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: helloworld.IHelloRequest);

    /** HelloRequest name. */
    public name: string;

    /**
     * Creates a new HelloRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HelloRequest instance
     */
    public static create(properties?: helloworld.IHelloRequest): helloworld.HelloRequest;

    /**
     * Encodes the specified HelloRequest message. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
     * @param message HelloRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: helloworld.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link helloworld.HelloRequest.verify|verify} messages.
     * @param message HelloRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: helloworld.IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HelloRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HelloRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): helloworld.HelloRequest;

    /**
     * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HelloRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): helloworld.HelloRequest;

    /**
     * Verifies a HelloRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HelloRequest
     */
    public static fromObject(object: { [k: string]: any }): helloworld.HelloRequest;

    /**
     * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
     * @param message HelloRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: helloworld.HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HelloRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a MultiHelloRequest. */
  interface IMultiHelloRequest {

    /** MultiHelloRequest name */
    name?: (string | null);

    /** MultiHelloRequest numGreetings */
    numGreetings: number;
  }

  /** Represents a MultiHelloRequest. */
  class MultiHelloRequest implements IMultiHelloRequest {

    /**
     * Constructs a new MultiHelloRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: helloworld.IMultiHelloRequest);

    /** MultiHelloRequest name. */
    public name: string;

    /** MultiHelloRequest numGreetings. */
    public numGreetings: number;

    /**
     * Creates a new MultiHelloRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultiHelloRequest instance
     */
    public static create(properties?: helloworld.IMultiHelloRequest): helloworld.MultiHelloRequest;

    /**
     * Encodes the specified MultiHelloRequest message. Does not implicitly {@link helloworld.MultiHelloRequest.verify|verify} messages.
     * @param message MultiHelloRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: helloworld.IMultiHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultiHelloRequest message, length delimited. Does not implicitly {@link helloworld.MultiHelloRequest.verify|verify} messages.
     * @param message MultiHelloRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: helloworld.IMultiHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultiHelloRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultiHelloRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): helloworld.MultiHelloRequest;

    /**
     * Decodes a MultiHelloRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultiHelloRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): helloworld.MultiHelloRequest;

    /**
     * Verifies a MultiHelloRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a MultiHelloRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultiHelloRequest
     */
    public static fromObject(object: { [k: string]: any }): helloworld.MultiHelloRequest;

    /**
     * Creates a plain object from a MultiHelloRequest message. Also converts values to other types if specified.
     * @param message MultiHelloRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: helloworld.MultiHelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultiHelloRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a HelloReply. */
  interface IHelloReply {

    /** HelloReply message */
    message?: (string | null);
  }

  /** Represents a HelloReply. */
  class HelloReply implements IHelloReply {

    /**
     * Constructs a new HelloReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: helloworld.IHelloReply);

    /** HelloReply message. */
    public message: string;

    /**
     * Creates a new HelloReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HelloReply instance
     */
    public static create(properties?: helloworld.IHelloReply): helloworld.HelloReply;

    /**
     * Encodes the specified HelloReply message. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
     * @param message HelloReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: helloworld.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link helloworld.HelloReply.verify|verify} messages.
     * @param message HelloReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: helloworld.IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HelloReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HelloReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): helloworld.HelloReply;

    /**
     * Decodes a HelloReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HelloReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): helloworld.HelloReply;

    /**
     * Verifies a HelloReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HelloReply
     */
    public static fromObject(object: { [k: string]: any }): helloworld.HelloReply;

    /**
     * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
     * @param message HelloReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: helloworld.HelloReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HelloReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
