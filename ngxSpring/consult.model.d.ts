/* tslint:disable */

export interface Consult extends CreateTable {
    state: string;
    progress: string;
    city: string;
    hole: string;
    phone: string;
    give: string;
    take: string;
    level: string;
    now: string;
    memo: string;
    come: string;
    first: string;
    start: string;
    end: string;
    phone2: string;
    giveName: string;
    takeName: string;
    deleteReason: string;
    lastModifiedDate: string;
    direct: boolean;
    csComplete: boolean;
    firstOrder: boolean;
    minute: string;
}

export interface SejongMessaging extends CreateTable {
    confirm: boolean;
    tryCount: number;
    friendsSend: string;
    friendsTalkResult: string;
    smsSend: string;
    smsResult: string;
    toNumber: string;
    userId: number;
    friendsTalkSuccess: boolean;
    smsSuccess: boolean;
    smsKey: string;
}

export interface Page<T> extends Slice<T> {
    totalElements: number;
    totalPages: number;
}

export interface CreateTable extends IdTable {
    createdAt: Date;
}

export interface Sort extends Streamable<Order>, Serializable {
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    offset: number;
    sort: Sort;
    paged: boolean;
    pageSize: number;
    unpaged: boolean;
    pageNumber: number;
}

export interface IdTable {
    id: number;
}

export interface Serializable {
}

export interface Slice<T> extends Streamable<T> {
    number: number;
    size: number;
    content: T[];
    sort: Sort;
    numberOfElements: number;
    pageable: Pageable;
    first: boolean;
    last: boolean;
}

export interface Streamable<T> extends Iterable<T>, Supplier<Stream<T>> {
    empty: boolean;
}

export interface Order extends Serializable {
    direction: Direction;
    property: string;
    ignoreCase: boolean;
    nullHandling: NullHandling;
    ascending: boolean;
    descending: boolean;
}

export interface Iterable<T> {
}

export interface Supplier<T> {
}

export interface Stream<T> extends BaseStream<T, Stream<T>> {
}

export interface BaseStream<T, S> extends AutoCloseable {
    parallel: boolean;
}

export interface AutoCloseable {
}

export type Direction = "ASC" | "DESC";

export type NullHandling = "NATIVE" | "NULLS_FIRST" | "NULLS_LAST";
