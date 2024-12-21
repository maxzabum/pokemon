type IResponse<T = any> = {

}

type IPagination = {
    next: string
    previous: string
    count: number
}

export { IPagination, IResponse }