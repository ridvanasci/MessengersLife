# Prophet Life UI

A React application showcasing the lives and teachings of prophets in Islam.

## GitHub Pages Deployment

### Automatic Deployment
1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to Pages section
4. Set source to "GitHub Actions"
5. The workflow will automatically deploy on every push to main branch

### Manual Deployment
```bash
npm install
npm run build
npm run deploy
```

### Local Development
```bash
npm install
npm run dev
```

## Project Structure
- `client/` - React frontend application
- `shared/` - Shared data and types
- `attached_assets/` - Images and static assets

## Technologies Used
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Radix UI components
- Framer Motion for animations

## Important Notes
- Update the `base` path in `vite.config.ts` to match your GitHub repository name
- This is now a client-only application (no backend server)
- All prophet data is stored locally in `shared/prophets-data.ts`