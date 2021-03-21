
// import axios from 'axios'
import { Storage } from './storage-service.js'
import {utilService} from './utilService.js'

const resolveData = res => res.data
const gLocalItems = []

export const itemService = {
    query,
    addItem,
    removeItem,
    getById,
    saveItem,
    getNextPrev
}

function query() {
    var items = _loadItems();
    return Promise.resolve(items)
}


function _loadItems() {
    let items;
    const itemsFromStorage = Storage.loadFromStorage('items');
    (itemsFromStorage && itemsFromStorage.length !== 0) ? items = itemsFromStorage : items = gLocalItems;
    Storage.saveToStorage('items', items);
    return items;
}

function addItem(item) {
    let itemsFromStorage = Storage.loadFromStorage('items');
    itemsFromStorage.unshift(item);
    Storage.saveToStorage('items', itemsFromStorage)
    return item;
}

function removeItem(itemId) {
    let itemsFromStorage = Storage.loadFromStorage('items');
    let items = itemsFromStorage.filter(item => item._id !== itemId)
    return Promise.resolve()
}

function getById(itemId) {
    let itemsFromStorage = Storage.loadFromStorage('items');
    const item = itemsFromStorage.find(item => item._id === itemId)
    return Promise.resolve(item)
}


function saveItem(itemToSave) {
    let itemsFromStorage = Storage.loadFromStorage('items');
    console.log('itemsfromstorage-', itemsFromStorage);
    let idx = itemsFromStorage.findIndex(item => item._id === itemToSave._id);
    return (idx !== -1) ? _update(itemToSave, itemsFromStorage) : _add(itemToSave, itemsFromStorage);
}

function _add(item, items) {
    items.unshift(item);
    Storage.saveToStorage('items', items)
    return item;
}

function _update(item, items) {
    items = items.map(item => item._id === items._id ? items : item)
    return item
}

function getNextPrev(itemId) {
    let itemsFromStorage = Storage.loadFromStorage('items');
    const itemIdx = itemsFromStorage.findIndex(item => item.id === itemId)
    const nextItemId = itemsFromStorage[itemIdx + 1]?  itemsFromStorage[itemIdx + 1]: itemsFromStorage[0]
    return nextItemId;
  }