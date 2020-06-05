import style from 'styles/detail.module.css'
import markdown from 'styles/markdown.module.css'
import { ArticleDetailProps } from 'types/article'
import { getArticle } from 'services/article'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const article = await getArticle(context.params.id)
  return {
    props: {
      article,
    }, // will be passed to the page component as props
  }
}

export default function Detail(props: ArticleDetailProps) {
  const { article } = props
  if (!article) {
    return <div>loading...</div>
  }
  return (
    <>
      <h1 className={style.detailTitle}>{article.title}</h1>
      <div className={style.detailLable}>分类：{article.category?.name}</div>
      <div className={style.detailLable}>发表时间：{article.createdAt}</div>
      <article
        className={markdown['markdown-body']}
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></article>
    </>
  )
}