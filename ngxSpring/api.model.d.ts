/* tslint:disable */

export interface Reserve extends CreateTable {
    name: string;
    phone: string;
    optionHome: boolean;
    optionGoWith: boolean;
    optionTime: number;
}

export interface Page<T> extends Slice<T> {
    totalElements: number;
    totalPages: number;
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
    sort: Sort;
    first: boolean;
    last: boolean;
    pageable: Pageable;
    numberOfElements: number;
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
