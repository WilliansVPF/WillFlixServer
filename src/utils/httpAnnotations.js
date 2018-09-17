export function Post(url, ref = 'save') {
    return decorator(url, ref, 'post')
}
    
export function Get(url, ref = 'get') {
    return decorator(url, ref, 'get')
}
    
export function Put(url, ref = 'update') {
    return decorator(url, ref, 'put')
}
    
export function Delete(url, ref = 'delete') {
    return decorator(url, ref, 'delete')
}

export function Option(url, ref = 'options') {
    return decorator(url, ref, 'options')
}

function decorator(url, ref, method) {
    return function(target) {
        target.http = target.http || []
        target.http.push({
            method,
            url,
            ref
        })
    }
}
