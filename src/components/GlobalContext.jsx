import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [addOns, setAddOns] = useState([]);
  const [addOnsTotal, setAddOnsTotal] = useState(0);
  const [plan, setPlan] = useState({ value: "", plan: "", date: "" });
  const [toggle, setToggle] = useState(true);
  const [moreplan, setMoreplan] = useState();
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [valueChange, setValueChange] = useState();
  const [checkedState, setCheckedState] = useState([false, false, false]);
  const [second, setSecond] = useState(0);
  const [currentValue, setCurrentValue] = useState();
  const [currentValue1, setCurrentValue1] = useState(0);
  const array = [
    {
      img: "images/icon-arcade.svg",
      plan: "Arcade",
      costs: toggle ? "$9/mo" : "$108/year",
      value: 9,
    },
    {
      img: "images/icon-advanced.svg",
      plan: "Advanced",
      costs: toggle ? "$12/mo" : "$144/year",
      value: 12,
    },
    {
      img: "images/icon-pro.svg",
      plan: "Pro",
      costs: toggle ? "$15/mo" : "$180/year",
      value: 15,
    },
  ];

  return (
    <GlobalContext.Provider
      value={{
        x,
        setX,
        y,
        setY,
        step,
        setStep,
        activeIndex,
        setActiveIndex,
        total,
        setTotal,
        selectedPlan,
        setSelectedPlan,
        addOns,
        setAddOns,
        addOnsTotal,
        setAddOnsTotal,
        plan,
        setPlan,
        toggle,
        setToggle,
        array,
        moreplan,
        setMoreplan,
        checkedState,
        setCheckedState,
        valueChange,
        setValueChange,
        second,
        setSecond,
        currentValue,
        setCurrentValue,
        currentValue1,
        setCurrentValue1,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
