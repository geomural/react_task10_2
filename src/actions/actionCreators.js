import {FILTER_SERVICE, UPDATE_SERVICE, CLEAN_CURRENT_SERVICE, EDIT_SERVICE, ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function editServiceField(name, price, id) {
  return {type: EDIT_SERVICE, payload: {name, price, id}}
}

export function cleanCurrentService() {
  return {type: CLEAN_CURRENT_SERVICE, payload: {}}
}

export function updateService(id, name, price) {
  return {type: UPDATE_SERVICE, payload: {id, name, price}}
}

export function filterService(items, value) {
  return {type: FILTER_SERVICE, payload: {items, value}}
}