type TSectionItem = {
  id: string;
  image_url: string;
  title: string;
};

type TSectionItems = TSectionItem[];

type TResult = TSectionItem & { amount: num; subEnd?: string };
