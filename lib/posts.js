import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        // markdown 파일을 읽어 string 변환
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        // gray-matter로 post 메타데이터 영역 parse
        const matterResult = matter(fileContents)

        // id와 함께 데이터 합침
        return {
            id, ...matterResult.data
        }
    })

    return allPostsData.sort(({ data: a}, {data: b}) => {
        if(a<b){
            return 1
        } else if(a>b){
            return -1
        } else {
            return 0
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}

// export function getAllPostIds() {
//     const fileNames = fs.readdirSync(postsDirectory)
//     return fileNames.map(fileName => {
//       // return 배열 값은 단순 문자열 배열이 아닌 주서고가 같은 객체 배열이어야함
//       // 키가 있어야하고 params 키가 있는 객체를 포함해야함(파일 이름에 'id'를 사용하기 때문)
//       // Returns an array that looks like this:
//       // [
//       //   {
//       //     params: {
//       //       id: 'ssg-ssr'
//       //     }
//       //   },
//       //   {
//       //     params: {
//       //       id: 'pre-rendering'
//       //     }
//       //   }
//       // ]
//       return {
//         params: {
//           id: fileName.replace(/\.md$/, ""),
//         },
//       };
//     })
// }

export async function getAllPostIds() {
  // 파일 시스템 대신
  // 외부 API endpoint 에서 데이터 fetch함
  const res = await fetch("..");
  const posts = await res.join();
  return posts.map((post) => {
    return {
      params: {
        // Statically Generates /posts/a/b/c
        // id: ['a', 'b', 'c']
        id: post.id,
      },
    };
  });
}