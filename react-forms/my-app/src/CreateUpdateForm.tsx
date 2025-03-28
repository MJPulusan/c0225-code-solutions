// import { createItem, updateItem } from './data';

// type Item = {
//   content: string;
// };

// // item will be undefined if creating, defined if editing
// type Props = {
//   item?: Item;
// };
// export function Form({ item }: Props) {

//   // const [content, setContent] = useState(item?.content);
//   const [content, setContent] = useState(item?.content ?? '');

//   const isCreating = item === undefined;

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     if (isCreating) {
//       createItem({ content });
//     } else {
//       item.content = content;
//       updateItem(item);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Content:
//         <input
//           type="text"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//       </label>
//       <button>{isCreating ? 'Create' : 'Update'}</button>
//     </form>
//   );
// }
