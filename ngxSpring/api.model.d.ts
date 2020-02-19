/* tslint:disable */

export interface Reserve extends CreateTable {
    name: string;
    phone: string;
    optionHome: boolean;
    optionGoWith: boolean;
    optionTime: number;
    memo: string;
}

export interface Page<T> extends Slice<T> {
    totalPages: number;
    totalElements: number;
}

export interface CreateTable extends IdTable {
    createdAt: Date;
}

export interface Sort extends Streamable<Order>, Serializable {
    unsorted: boolean;
    sorted: boolean;
}

export interface Pageable {
    offset: number;
    sort: Sort;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
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
    numberOfElements: number;
    sort: Sort;
    first: boolean;
    pageable: Pageable;
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
    descending: boolean;
    ascending: boolean;
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
