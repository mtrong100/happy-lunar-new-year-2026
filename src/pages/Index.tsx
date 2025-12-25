import { Fireworks } from '@/components/Fireworks';
import { CountdownTimer } from '@/components/CountdownTimer';
import { SnakeDecoration } from '@/components/SnakeDecoration';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at bottom, hsl(230 30% 12%) 0%, hsl(230 35% 5%) 100%)' }}>
      {/* Background decorations */}
      <SnakeDecoration />
      
      {/* Fireworks canvas */}
      <Fireworks />

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Vietnamese characters decoration */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4 md:gap-8">
          <span className="text-3xl md:text-5xl text-primary/80 font-body animate-pulse-glow">Phúc</span>
          <span className="text-3xl md:text-5xl text-accent/80 font-body animate-pulse-glow" style={{ animationDelay: '0.5s' }}>Lộc</span>
        </div>

        {/* Year badge */}
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <span className="text-accent text-sm md:text-base font-medium">🐴 Năm Bính Ngọ - Hỏa Mã</span>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-center mb-4">
          <span className="block text-lg md:text-2xl text-muted-foreground font-body tracking-widest uppercase mb-2">
            Đếm Ngược Đến
          </span>
          <span className="block text-4xl md:text-6xl lg:text-8xl font-display font-bold gold-text text-glow">
            Tết Nguyên Đán
          </span>
          <span className="block text-5xl md:text-7xl lg:text-9xl font-display font-bold text-primary mt-2">
            2026
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-md mx-auto font-body">
          17 Tháng 2, 2026 · Mùng 1 Tết Bính Ngọ
        </p>

        {/* Countdown timer */}
        <CountdownTimer />

        {/* Greeting */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-2xl md:text-4xl font-body text-accent mb-2 animate-pulse-glow">
            Chúc Mừng Năm Mới
          </p>
          <p className="text-muted-foreground text-sm md:text-base font-body tracking-wide">
            An Khang Thịnh Vượng · Vạn Sự Như Ý
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <span className="text-accent/60 text-xl">✦</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>
      </main>
    </div>
  );
};

export default Index;
