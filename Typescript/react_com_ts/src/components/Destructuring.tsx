interface Props {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];
  category: Category;
}

type Category = (typeof Category)[keyof typeof Category];

export const Category = {
  JS: "JavaScript",
  TS: "TypeScript",
  P: "Python",
} as const;

function Destructuring({ title, content, commentQty, tags, category }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}

export default Destructuring;
