export default function ({ store, redirect }) {
  const { isAuthenticated } = store.state.modules.auth;
  console.log("🚀 ~ middleware auth running ...:")
  
  if (!isAuthenticated) {
    return redirect('auth/login');
  }
}
