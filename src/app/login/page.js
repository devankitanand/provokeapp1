export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-center text-white"> login</h1>
          <div className="bg-white">
            <form>
                <input className="p-5" type="text" placeholder="username" /><br></br>
                <input className="p-5" type="password" placeholder="password" /><br></br>
                <input type="checkbox" />Remember me<br></br>
                <button className="rounded content-center" type="submit">Login</button>
            </form>
          </div>
        </div>
      </main>
    )
  }
  