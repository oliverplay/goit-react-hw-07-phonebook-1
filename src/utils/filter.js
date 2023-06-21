export default function filterFunction(contacts, filter) {
  return contacts.filter(contact => {
    const contactName = contact.name.toLowerCase();
    const filterName = filter.toLowerCase();

    // const contactNumber = contact.phone;
    // const filterNumber = filter.phone;

    

    return contactName.includes(filterName) ;
    
  });
}
// ((contact) =>
//     contact.name.toLowerCase().includes(state.filter.toLowerCase())
// ||  contact.number.includes(state.filter)
//   );