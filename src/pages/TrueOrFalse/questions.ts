export interface TrueFalseQuestion {
  id: number;
  question: string;
  answer: boolean;
  text: string;
}
export const questions: TrueFalseQuestion[] = [
  {
    id: 1,
    question: "Quail eggs have less cholesterol than chicken eggs?",
    answer: false,
    text: "Not quite true. Given equal volumes of each, whole quail eggs do have less total cholesterol than entire chicken eggs. This difference between quail and chicken eggs is due to the much higher percentage of whites in chicken eggs. However, comparing equal volumes of egg yolks, quail eggs have much higher total cholesterol. There is a disparity in reports dividing the total cholesterol into HDL and LDL. Some say quail have higher HDL.",
  },
  {
    id: 2,
    question:
      "People allergic to chicken eggs may not be allergic to quail eggs?",
    answer: true,
    text: "True. Both egg yolks and egg whites contain proteins that can cause allergies, but an allergy to egg whites is most common. Breast-fed infants can also have an allergic reaction to egg proteins in breast milk if the mother consumes eggs. Chicken and quail eggs have different levels of various proteins.",
  },
  {
    id: 3,
    question: "Quail eggs are healthier than chicken eggs?",
    answer: true,
    text: "True. Quail eggs are slightly healthier because they contain more fats, proteins, vitamins, and minerals.",
  },
  {
    id: 4,
    question: "Quail eggs have a richer taste than chicken eggs?",
    answer: true,
    text: "True. However, this is only true if the quail and chicken were fed the same diet. The difference is small, but quail eggs have a bigger yolk, which produces much of the more vibrant taste.",
  },
  {
    id: 5,
    question: "Quail eggs can replace chicken eggs in any recipe?",
    answer: true,
    text: "True. Quail eggs can be substituted for chicken eggs regardless of preparation or dish. Usually, 5-6 regular quail eggs or 4-5 jumbo quail eggs replace 1 chicken egg.",
  },
];
