export default function LoginPage(){
  return (
    <div className="mt-4">
    <h1 className="text-center text-4xl font-bold">Login</h1>
      <form className="max-w-lg mx-auto border">
        <input type="email" placeholder={'your@email.com'}/>
        <input type="password" placeholder={'password'}/>
        <button>Login</button>
      </form>
    </div>
  );
}