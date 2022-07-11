import { useState, createContext, useContext } from 'react';

export function getStaticProps() {
  return {
    props: { likes: 22, cars: [{ make: 'Toyota', model: 'Corolla', year: 2020 }] },
  }
}

function generateCar() {
  const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Audi'];
  const models = ['Corolla', 'Civic', 'Fiesta', 'Focus', 'Escape', 'X5', 'X6'];
  const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];
  const make = makes[Math.floor(Math.random() * makes.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  const year = years[Math.floor(Math.random() * years.length)];
  console.log(`${make} ${model} ${year}`);
  return ({ make, model, year });
}

const useAppController = (initialLikes: number, initialCars: any) => {
  const [likes, setLikes] = useState(initialLikes);
  const [cars, setCars] = useState(initialCars);
  const addLike = () => {
    setLikes(likes + 1);
  }
  const addCar = (car: any) => {
    setCars([...cars, car]);
  }
  const randomCar = () => {
    setCars([...cars, generateCar()]);
  }

  return { addLike, likes, addCar, randomCar, cars };
}

const AppContext = createContext<ReturnType<typeof useAppController>>({
  addLike: () => { },
  likes: 0,
  addCar: () => { },
  randomCar: () => { },
  cars: [],
});

export const AppProvider = ({ initialLikes, initialCars, children }: { initialLikes: number, initialCars: any, children: React.ReactNode }) => (
  <AppContext.Provider value={useAppController(initialLikes, initialCars)}>
    {children}
  </AppContext.Provider>
);

export const useApp = () => useContext(AppContext);