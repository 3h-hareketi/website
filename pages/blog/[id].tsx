import { GetStaticPaths, GetStaticProps } from "next";
import { getSdk, Post } from "../../interfaces";
import { client } from "../../lib/graphCmsClient";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
type Props = {
  post: Post;
  similarPosts: Post[];
};
const BlogPost = ({ post, similarPosts }: Props) => (
  <div className="flex justify-center w-full mb-24">
    <div className="flex flex-col">
      {" "}
      <Image
        alt={`${post.title} Cover Image`}
        src={post.coverImage.url}
        height={720}
        width={1600}
        className="mx-auto rounded-xl -z-10"
      />
      <div className="z-10 w-2/3 p-8 md:p-24 mx-auto -mt-16 md:-mt-48 bg-white shadow-xl bg-opacity-90 rounded-xl backdrop-filter backdrop-blur-[80px] ">
        <div className="flex flex-row flex-wrap md:-mt-12 md:-ml-12 md:flex-nowrap">
          <Image
            className="rounded-full"
            src={post.createdBy?.picture || "/placeholder.jpg"}
            alt={"Post author" + post.createdBy?.name + "'s profile image"}
            width={80}
            height={60}
          />
          <div className="flex flex-col text-xs text-left text-black md:text-sm">
            <div className="">{post.createdBy?.name}</div>
            <div className="mb-10 text-xs text-gray-600"> {post.createdAt}</div>
          </div>
          <div className="md:ml-auto">
            <div className="flex justify-center mt-4 space-x-1 md:mt-8 lg:space-x-2">
              <a
                className="inline-block px-1"
                href={"facebook.com"}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7464 2.85352C6.2228 2.85352 2.55518 6.52114 2.55518 11.0448C2.55518 15.1513 5.58047 18.5425 9.52183 19.135V13.2154H7.49518V11.0625H9.52183V9.62972C9.52183 7.25767 10.6775 6.2167 12.6488 6.2167C13.5929 6.2167 14.0925 6.28701 14.3287 6.31841V8.19762H12.984C12.1471 8.19762 11.855 8.99149 11.855 9.8857V11.0625H14.3076L13.9751 13.2154H11.855V19.152C15.853 18.6101 18.9377 15.1916 18.9377 11.0448C18.9377 6.52114 15.27 2.85352 10.7464 2.85352Z"
                    fill="#1BC3D4"
                  />
                </svg>
              </a>
              <a
                className="inline-block px-1"
                href={"instagram.com"}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5931 2.06055C5.70018 2.06055 1.71924 6.04149 1.71924 10.9344C1.71924 15.8273 5.70018 19.8082 10.5931 19.8082C15.486 19.8082 19.4669 15.8273 19.4669 10.9344C19.4669 6.04149 15.486 2.06055 10.5931 2.06055ZM8.31729 4.79096H12.8675C15.0007 4.79096 16.7365 6.52615 16.7365 8.6586V13.2088C16.7365 15.342 15.0013 17.0778 12.8689 17.0778H8.31863C6.18549 17.0778 4.44965 15.3426 4.44965 13.2102V8.65994C4.44965 6.5268 6.18484 4.79096 8.31729 4.79096ZM8.31729 6.15617C6.93775 6.15617 5.81486 7.27971 5.81486 8.65994V13.2102C5.81486 14.5897 6.9384 15.7126 8.31863 15.7126H12.8689C14.2484 15.7126 15.3713 14.5891 15.3713 13.2088V8.6586C15.3713 7.27906 14.2478 6.15617 12.8675 6.15617H8.31729ZM13.7795 7.2934C14.0307 7.2934 14.2341 7.49682 14.2341 7.74802C14.2341 7.99922 14.0307 8.20398 13.7795 8.20398C13.5283 8.20398 13.3235 7.99922 13.3235 7.74802C13.3235 7.49682 13.5283 7.2934 13.7795 7.2934ZM10.5931 7.52137C12.475 7.52137 14.0061 9.05245 14.0061 10.9344C14.0061 12.8163 12.475 14.3474 10.5931 14.3474C8.71114 14.3474 7.18007 12.8163 7.18007 10.9344C7.18007 9.05245 8.71114 7.52137 10.5931 7.52137ZM10.5931 8.88658C10.05 8.88658 9.5291 9.10233 9.14506 9.48637C8.76102 9.87041 8.54527 10.3913 8.54527 10.9344C8.54527 11.4775 8.76102 11.9984 9.14506 12.3824C9.5291 12.7665 10.05 12.9822 10.5931 12.9822C11.1362 12.9822 11.6571 12.7665 12.0411 12.3824C12.4251 11.9984 12.6409 11.4775 12.6409 10.9344C12.6409 10.3913 12.4251 9.87041 12.0411 9.48637C11.6571 9.10233 11.1362 8.88658 10.5931 8.88658Z"
                    fill="#1BC3D4"
                  />
                </svg>
              </a>
              <a
                className="inline-block px-1"
                href={"twitter.com"}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1698 2.85352C6.64614 2.85352 2.97852 6.52114 2.97852 11.0448C2.97852 15.5684 6.64614 19.236 11.1698 19.236C15.6934 19.236 19.361 15.5684 19.361 11.0448C19.361 6.52114 15.6934 2.85352 11.1698 2.85352ZM15.5821 9.36214C15.5862 9.45293 15.5882 9.54303 15.5882 9.63313C15.5882 12.41 13.4756 15.61 9.61137 15.61C8.42433 15.61 7.32056 15.2626 6.39153 14.666C6.55604 14.6858 6.72328 14.6946 6.89325 14.6946C7.87824 14.6946 8.78337 14.3595 9.50147 13.795C8.58201 13.7779 7.80589 13.1704 7.53899 12.3362C7.66732 12.3608 7.79906 12.3738 7.93422 12.3738C8.12603 12.3738 8.31238 12.3478 8.48781 12.3001C7.5267 12.1076 6.80246 11.2584 6.80246 10.2406C6.80246 10.2318 6.80246 10.2229 6.80246 10.214C7.08574 10.3717 7.40929 10.4659 7.75401 10.4768C7.19086 10.1007 6.81953 9.45702 6.81953 8.72868C6.81953 8.34301 6.9226 7.98192 7.10349 7.6727C8.13968 8.9437 9.68782 9.78058 11.4332 9.86795C11.3977 9.71436 11.3793 9.55395 11.3793 9.38944C11.3793 8.2297 12.3199 7.28839 13.4797 7.28839C14.0838 7.28839 14.6299 7.54368 15.0128 7.95188C15.4913 7.857 15.9412 7.68293 16.3473 7.44198C16.1903 7.93277 15.8572 8.3437 15.4231 8.60445C15.8476 8.55394 16.2524 8.44131 16.6299 8.27407C16.3494 8.69592 15.9937 9.06521 15.5821 9.36214Z"
                    fill="#1BC3D4"
                  />
                </svg>
              </a>
              <a
                className="inline-block px-1 fill-primary-500"
                href={"linkedIn.com"}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4657 2.74316C5.94204 2.74316 2.27441 6.41079 2.27441 10.9344C2.27441 15.458 5.94204 19.1256 10.4657 19.1256C14.9893 19.1256 18.6569 15.458 18.6569 10.9344C18.6569 6.41079 14.9893 2.74316 10.4657 2.74316ZM7.39121 6.43127C7.96596 6.43127 8.3489 6.81421 8.3489 7.3248C8.3489 7.83538 7.96596 8.21833 7.32773 8.21833C6.75297 8.21901 6.37003 7.83538 6.37003 7.3248C6.37003 6.81421 6.75297 6.43127 7.39121 6.43127ZM8.41784 14.3474H6.37003V8.88659H8.41784V14.3474ZM15.2439 14.3474H13.3162V11.3631C13.3162 10.5378 12.8022 10.3474 12.6097 10.3474C12.4172 10.3474 11.7742 10.4743 11.7742 11.3631C11.7742 11.49 11.7742 14.3474 11.7742 14.3474H9.78305V8.88659H11.7749V9.64838C12.0315 9.204 12.5455 8.88659 13.5094 8.88659C14.4732 8.88659 15.2439 9.64838 15.2439 11.3631V14.3474Z"
                    fill="#1BC3D4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <h1 className="my-10 text-2xl font-bold text-black md:text-4xl">
          {post.title}
        </h1>
        <h2 className="mb-6 text-base font-bold text-gray-600 md:text-xl">
          {post.excerpt}
        </h2>
        <RichText
          content={post.content?.raw}
          renderers={{
            blockquote: ({ children }) => (
              <div className="">
                {/* custom TODO blockquote styling */}
                <div className="italic font-extrabold text-black">
                  {children}
                </div>
              </div>
            ),
          }}
        />
      </div>
      {similarPosts && (
        <>
          {" "}
          <h1 className="mx-auto mt-24 text-xl font-semibold text-gray-700 md:text-4xl">
            Similar Posts
          </h1>
          <div className="mx-auto text-base text-gray-400">
            We think you might like these articles too.
          </div>
          <div className="flex flex-row flex-wrap justify-between w-[80vw] mt-16 self-center">
            {similarPosts &&
              similarPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col max-w-lg mt-8 shadow-xl rounded-xl"
                >
                  <Image
                    src={post.coverImage.url}
                    alt={`Cover image of suggested article: ${post.title}`}
                    width={500}
                    height={300}
                    className="rounded-t-xl"
                  />
                  <div className="flex flex-col justify-between p-3 md:p-6">
                    <div className="flex flex-row">
                      <div className="text-sm text-gray-400">
                        {post.createdBy?.name}, {post.createdAt}
                      </div>
                      <div className="ml-auto">
                        {" "}
                        {post.tags.slice(0, 1).map((tag) => (
                          <div
                            key={tag}
                            className={`text-white text-xs rounded-xl md:p-1.5 md:mx-1 uppercase md:max-h-8 max-h-6 p-0.5 ${"bg-purple-500"}`}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    <h1 className="text-base font-semibold">{post.title}</h1>
                    <div className="mt-4 text-xs text-gray-800">
                      {post.excerpt}
                    </div>
                    <Link passHref href={`/blog/${post.id}`}>
                      <a className="w-24 p-3 mt-6 text-xs text-center text-white rounded-full bg-primary-500">
                        Read more
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sdk = getSdk(client);

  const { post } = await sdk.Post({
    id: params?.id as string,
  });
  const { posts } = await sdk.SimilarPosts({
    currentPost: post?.id || "",
    tag: [post?.tags[0] || ""],
  });

  const similarPosts = posts.slice(0, 3);
  return {
    props: { post, similarPosts },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sdk = getSdk(client);
  const { posts } = await sdk.Posts();

  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    fallback: false,
  };
};

export default BlogPost;
