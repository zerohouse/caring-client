/* tslint:disable */

export interface Caretaker extends CreateTable {
    protector: string;
    taker: string;
    phone: string;
    gender: boolean;
    age: number;
    level: string;
    city: string;
    ward: string;
    address: string;
    active: string;
    restroom: string;
    diaper: string;
    diaperText: string;
    weight: number;
    disease: string;
    meal: string;
    avoidFood: string;
    recognition: string;
    sexRelated: string;
    houseSize: string;
    inmate: string;
    pet: string;
    nowCaregiver: string;
    religion: string;
    serviceTime: string;
    interviewTime: string;
    caregiverGender: string;
    hopeService: string;
    hopeCaregiver: string;
    writer: string;
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
