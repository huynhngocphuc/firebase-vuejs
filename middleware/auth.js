export default function ({ store, redirect }) {
  const { isAuthenticated } = store.state.auth;
  console.log("🚀 ~ middleware auth running ...:")
  
  if (!isAuthenticated) {
    return redirect('auth/login');
  }
}
