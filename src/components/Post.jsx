const names = ['Atif', 'Aftab']

function Post(){
  let name = Math.random() > 0.5 ? names[0] : names[1]
  return<>
  <p>{name}</p>
  <p>React is the way</p>
  </>
}
export default Post