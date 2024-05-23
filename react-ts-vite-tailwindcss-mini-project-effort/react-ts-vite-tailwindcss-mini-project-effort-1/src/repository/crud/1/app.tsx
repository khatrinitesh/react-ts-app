import React,{useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <CrudApp/>
    </>
  )
}

export default CustomApp

interface Item {
    id: number;
    name: string;
  }

  const CrudApp: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [editId, setEditId] = useState<number | null>(null);

    const addItem = () => {
        if (!inputValue.trim()) return;
        const newItem: Item = {
          id: new Date().getTime(),
          name: inputValue.trim(),
        };
        setItems(prevItems => [...prevItems, newItem]);
        setInputValue('');
      };

      const deleteItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
      };
    
      const editItem = (id: number) => {
        const itemToEdit = items.find(item => item.id === id);
        if (itemToEdit) {
          setInputValue(itemToEdit.name);
          setEditId(id);
        }
      };

      const updateItem = () => {
        if (!inputValue.trim()) return;
        setItems(prevItems =>
          prevItems.map(item =>
            item.id === editId ? { ...item, name: inputValue.trim() } : item
          )
        );
        setInputValue('');
        setEditId(null);
      };

      return (
        <div>
          <h1>CRUD Application</h1>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item name"
          />
          <button onClick={editId !== null ? updateItem : addItem}>
            {editId !== null ? 'Update Item' : 'Add Item'}
          </button>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => editItem(item.id)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
  }