export default function ({ store, redirect }) {
  const { isAuthenticated } = store.state.auth;
  console.log("🚀 ~ middleware auth running...", )
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    console.log("🚀 ~ login redireact:")
    return redirect('auth/login');
  }
}
