export async function getStaticProps(context) {
  return {
    reirect: {
      dstination: "/",
      permanent: true, // triggers 308
    },
  }
}
