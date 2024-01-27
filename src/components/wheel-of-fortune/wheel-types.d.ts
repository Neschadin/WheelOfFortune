type TSectionItem = {
  id: string;
  image_url: string;
  title: string;
};

type TWheelSections = TSectionItem[];

type TResult = TSectionItem & { amount: num; subEnd?: string };
