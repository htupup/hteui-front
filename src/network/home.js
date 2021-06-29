import {request} from './request'

export function getUpdateHomeMultidata() {
  return request({
  	url: '/api/dpcon/list',
    method: 'GET',
  })
}


export function postUpdateHomeAddMultidata(newchapter) {
  return request({
  	url: '/api/dpcon/new',
    method: 'POST',
    data: newchapter
  })
}

export function delUpdateHomeMultidata(delchapter) {
  return request({
  	url: '/api/dpcon/del',
    method: 'POST',
    data: delchapter
  })
}

export function changeUpdateHomeMultidata(changechapter) {
  return request({
  	url: '/api/dpcon/updatename',
    method: 'POST',
    data: changechapter
  })
}

export function dragUpdateHomeMultidata(dragdata) {
  return request({
  	url: '/api/dpcon/drag',
    method: 'POST',
    data: dragdata
  })
}
