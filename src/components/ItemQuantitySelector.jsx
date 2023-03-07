// import React, { useContext} from "react";
// import {
//   ButtonGroup,
//   IconButton,
//   Tooltip,
//   Center,
//   Button,
// } from "@chakra-ui/react";
// import { AddIcon, MinusIcon } from "@chakra-ui/icons";
// import { CounterContext  } from "../context/CounterContext";

// const ItemCount = ({ stock }) => {

//   // const [ count ,setCount,addToCart]= useContext(CounterContext)
//   const { count, setCount } = useContext(CounterContext);
  
  
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const addToCart = () => {
//     setCart((currItems) => {
//       const isItemFound = currItems.find((item) => item.id === id);
//       if (isItemFound) {
//         return currItems.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity + count };
//           } else {
//             return item;
//           }
//         });
//       } else {
//         return [...currItems, { id, quantity: count, price, name }];
//       }
//     });
//   };
//   return (
//     <>
//     {/* renderizado condicional */}
//       <ButtonGroup size="sm" isAttached variant="outline">
//         {count < 1 ? (
//           <Tooltip label="minimum stock reached" placement="bottom">
//             <IconButton icon={<MinusIcon />} isDisabled />
//           </Tooltip>
//         ) : (
//           <IconButton icon={<MinusIcon />} onClick={decrement} />
//         )}
//         <Center>
//           <Button
//             onClick={() => addToCart()}
//             variant="solid"
//             colorScheme="blue"
//           >
//             Add to cart: {count}
//           </Button>
//         </Center>
//         {count <= stock ? (
//           <IconButton icon={<AddIcon />} onClick={increment} />
//         ) : (
//           <Tooltip label="stock limit reached" placement="bottom">
//             <IconButton icon={<AddIcon />} isDisabled />
//           </Tooltip>
//         )}
//       </ButtonGroup>
//     </>
//   );
// };

// export default ItemCount;




// import { useContext, useState } from "react";
// import {
//   Text,
//   ButtonGroup,
//   IconButton,
//   Tooltip,
//   Center,
//   Button,
// } from "@chakra-ui/react";
// import { AddIcon, MinusIcon } from "@chakra-ui/icons";
// import { CounterContext } from "../context/CounterContext";

// const ItemQuantitySelector = ({ stock, id, price, name }) => {
//   const [cart, setCart] = useContext(CounterContext);
//   const [count, setCount] = useState(1);

//   const addQty = () => {
//     setCount(count + 1);
//   };

//   const substractQty = () => {
//     setCount(count - 1);
//   };

//   const addToCart = () => {
//     setCart((currItems) => {
//       const isItemFound = currItems.find((item) => item.id === id);
//       if (isItemFound) {
//         return currItems.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity + count };
//           } else {
//             return item;
//           }
//         });
//       } else {
//         return [...currItems, { id, quantity: count, price, name }];
//       }
//     });
//   };

//   return (
//     <>
//       <ButtonGroup size="sm" isAttached variant="outline">
//         {count < 1 ? (
//           <Tooltip label="minimum stock reached" placement="bottom">
//             <IconButton icon={<MinusIcon />} isDisabled />
//           </Tooltip>
//         ) : (
//           <IconButton icon={<MinusIcon />} onClick={substractQty} />
//         )}
//         <Center>
//           <Button
//             onClick={() => addToCart()}
//             variant="solid"
//             colorScheme="blue"
//           >
//             Add to cart: {count}
//           </Button>
//         </Center>
//         {count < stock ? (
//           <IconButton icon={<AddIcon />} onClick={addQty} />
//         ) : (
//           <Tooltip label="stock limit reached" placement="bottom">
//             <IconButton icon={<AddIcon />} isDisabled />
//           </Tooltip>
//         )}
//       </ButtonGroup>
//     </>
//   );
// };

// export default ItemQuantitySelector;

import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Stack, Button } from "@chakra-ui/react";

const ItemQuantitySelector = ({ stock }) => {
  const { counter, setCounter } = useContext(CounterContext);

  const suma = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const resta = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        {counter === 0 ? (
          <Button onClick={resta} variant="ghost" colorScheme="teal" size="md">
            -
          </Button>
        ) : (
          <Button onClick={resta} colorScheme="teal" size="md">
            -
          </Button>
        )}
        <h2>{counter}</h2>
        {counter === stock ? (
          <Button onClick={suma} variant="ghost" colorScheme="teal" size="md">
            +
          </Button>
        ) : (
          <Button onClick={suma} colorScheme="teal" size="md">
            +
          </Button>
        )}
      </Stack>
    </>
  );
};

export default ItemQuantitySelector;
