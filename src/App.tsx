import React, { useState } from 'react';
import bonusVideoImg from './assets/images/bonus_video_noperson_1785058672380.jpg';
import bonusChecklistImg from './assets/images/bonus_check_blurred_1785058854640.jpg';
import thought1Img from './assets/images/thought1_strategy_1785059057734.jpg';
import thought2Img from './assets/images/thought2_v2_1785059500000_1785059573690.jpg';
import thought3Img from './assets/images/thought3_ifthen_1785059088536.jpg';
import thought4Img from './assets/images/thought4_business_1785059230552.jpg';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen selection:bg-amber-500 selection:text-slate-950">
      
      {/* 1. Hero / Catch */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-amber-500/30 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          
          {/* Check badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-semibold text-amber-300">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/40 shadow-md">
              ✔実績なし
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/40 shadow-md">
              ✔キャリアなし
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/40 shadow-md">
              ✔練習時間なし
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4 pt-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-amber-400">
              「今の技術のまま」テニスエリートに勝つ！
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-serif border-y border-amber-500/30 py-6 my-2 shadow-inner">
              大人のテニスIQ戦略
            </h1>
          </div>

          {/* CTA Banner */}
          <div className="pt-4 space-y-3">
            <p className="text-amber-300 font-bold text-base sm:text-xl">
              ギリギリ勝てない相手に
            </p>
            <a
              href="#bonus-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('bonus-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block w-full max-w-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-extrabold text-xl sm:text-3xl py-5 px-6 rounded-xl shadow-2xl border border-amber-300 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer text-center"
            >
              ギリギリ勝つ“無料特典”はこちら
            </a>
          </div>

        </div>
      </section>

      {/* 2. Concept Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-bold px-4 py-1 rounded-full text-xs tracking-wider uppercase shadow-md">
            CONCEPT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 text-center mb-6 font-serif">
            大人のテニスIQ戦略とは？
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-200 text-center sm:text-left font-medium">
            体力や筋力に頼らず、4つの思考を使って、「今の技術のまま」テニスエリートに勝つための大人のズルい戦い方です。
          </p>
        </div>
      </section>

      {/* 3. 4 Thoughts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        
        {/* Thought 1 */}
        <div className="bg-slate-900 border-l-4 border-amber-500 rounded-r-2xl overflow-hidden shadow-xl border-y border-r border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-4 h-48 md:h-full relative overflow-hidden bg-slate-950">
              <img
                src={thought1Img}
                alt="思考1、「技術と体力」で勝負しない"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-8 p-6 sm:p-8 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 font-serif">
                思考1、「技術と体力」で勝負しない
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                テニススクールやYouTubeのレッスン動画は【技術】のアドバイスばかりが溢れています。<br />
                しかし、週に1回しか練習できない40代以上の社会人プレーヤーが、この教え通りのテニスをしても、テニスエリートやコーチに勝つことはできません。
              </p>
            </div>
          </div>
        </div>

        {/* Thought 2 */}
        <div className="bg-slate-900 border-l-4 border-amber-500 rounded-r-2xl overflow-hidden shadow-xl border-y border-r border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-8 p-6 sm:p-8 space-y-4 order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 font-serif">
                思考2、ポイントの取り方は「5つの要素の組み合わせ」だけ
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                大人のテニスIQ戦略とは、今から新しい技術を身につけることではありません。<br />
                あなたが【今持っている技術】を使って、ポイントを取るためにこんな「5つの組み合わせ」を作ることです。
              </p>
              <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-amber-500/20 space-y-2 text-slate-200 text-sm sm:text-base font-semibold">
                <div>1、深さ（短さ）</div>
                <div>2、高さ（低さ）</div>
                <div>3、角度</div>
                <div>4、スピン（スライス）</div>
                <div>5、速さ（遅さ）</div>
              </div>
            </div>
            <div className="md:col-span-4 h-56 md:h-full relative overflow-hidden bg-slate-950 order-1 md:order-2">
              <img
                src={thought2Img}
                alt="5つの要素の組み合わせ"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Thought 3 */}
        <div className="bg-slate-900 border-l-4 border-amber-500 rounded-r-2xl overflow-hidden shadow-xl border-y border-r border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-4 h-48 md:h-full relative overflow-hidden bg-slate-950">
              <img
                src={thought3Img}
                alt="思考3、試合中のパニックを防ぐ「If-Thenプランニング」"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-8 p-6 sm:p-8 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 font-serif">
                思考3、試合中のパニックを防ぐ「If-Thenプランニング」
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                「理屈は分かるけど、試合になると頭が真っ白になる」<br />
                そんな40代以上の選手を救うのが【If-Then（イフ・ゼン）プランニング】です。<br />
                「If-Thenプランニング」とは、試合に入る前から「もし（If）相手がこう来たら、こう打つ（Then）」というルールを決めておくのです。
              </p>
            </div>
          </div>
        </div>

        {/* Thought 4 */}
        <div className="bg-slate-900 border-l-4 border-amber-500 rounded-r-2xl overflow-hidden shadow-xl border-y border-r border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-8 p-6 sm:p-8 space-y-3 order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 font-serif">
                思考4、ビジネスの修羅場をくぐり抜けた「大人」の最大の武器
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                40代以上になると、身体能力やフィジカルのピークはすぎていますが、「思考力（テニスIQ）」は違います。<br />
                テニスは、ネットを挟んで相手の心理を読み合い、パズルを組み立てていく頭脳戦です。<br />
                仕事で数々の修羅場をくぐり抜け、論理的に物事を考える力を身につけてきた40代以上の大人だからこそ、この「思考設計」は右肩上がりに成長します。
              </p>
            </div>
            <div className="md:col-span-4 h-56 md:h-full relative overflow-hidden bg-slate-950 order-1 md:order-2">
              <img
                src={thought4Img}
                alt="思考4、ビジネスの修羅場をくぐり抜けた大人の最大の武器"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </section>

      {/* 4. Recommend Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 text-center font-serif border-b border-amber-500/20 pb-4">
            テニスIQ戦略はこんな方にオススメ
          </h2>
          <div className="space-y-3 text-slate-200 text-sm sm:text-base">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold shrink-0">✔</span>
              <span>大人のテニスIQ戦略を使って、ベテランの県チャンピオンになりたい！</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold shrink-0">✔</span>
              <span>今まで自分をカモにしてきたテニスエリートを試合で支配する側になりたい！</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold shrink-0">✔</span>
              <span>〇〇コーチに試合で勝ったという優越感にひたりたい！</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold shrink-0">✔</span>
              <span>ロブばかり打つシコラーのおじさんに負けてしまう！</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold shrink-0">✔</span>
              <span>自滅する度に「何をやっているんだろう」と自己嫌悪になりたくない！</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold shrink-0">✔</span>
              <span>これ以上練習時間を確保できないけど勝ちたい！</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold shrink-0">✔</span>
              <span>周りの仲間から「教えてください」と頼られる存在になりたい！</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold shrink-0">✔</span>
              <span>異性から「一緒にミックスに出てください！」と誘われるようになりたい！</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 text-center font-serif">
          ご提供サービス
        </h2>

        {/* Standard Course */}
        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="text-xl sm:text-2xl font-bold text-white font-serif">
            大人のテニスIQ戦略 6ヶ月プログラム【スタンダードコース】
          </div>
          <div className="text-amber-400 text-sm font-semibold">
            （オンライン完結）
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-amber-300">
            価格：138,000円（税込）
          </div>
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800 pt-4">
            内容：動画コンテンツ見放題、グループコンサルティング、個別戦略構築サポート（オンライン）、専用チャットでの無制限質問対応
          </div>
        </div>

        {/* Premium Course */}
        <div className="bg-slate-900 border-2 border-amber-500 rounded-2xl p-6 sm:p-8 space-y-4 relative shadow-2xl">
          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-xs font-bold px-3.5 py-1 rounded-bl-xl shadow-md">
            RECOMMENDED
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white font-serif">
            大人のテニスIQ戦略 6ヶ月プログラム【プレミアムコース】
          </div>
          <div className="text-amber-400 text-sm font-semibold">
            （オンライン＋リアル直接指導）
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-amber-300">
            価格：198,000円（税込）
          </div>
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800 pt-4">
            内容：スタンダードコースの全内容に加え、月1回の浜松でのリアルレッスン（直接指導によるテニスIQの身体への落とし込み）
          </div>
        </div>

        {/* Notice Note */}
        <div className="p-5 sm:p-6 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-400 text-xs sm:text-sm leading-relaxed">
          ※上記プログラムは、どなたでも受講できるわけではありません。ミスマッチを防ぎ、確実に成果を出していただくため、まずは「無料の個別戦略会議＆説明会」にご参加いただき、私自身が「確実にお役に立てる」と判断した方にのみご案内しております。
        </div>
      </section>

      {/* 6. Voice Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 text-center font-serif">
          お客様の声
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center text-slate-300 font-semibold shadow-md">
            お客様の声1
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center text-slate-300 font-semibold shadow-md">
            お客様の声2
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center text-slate-300 font-semibold shadow-md">
            お客様の声3
          </div>
        </div>
      </section>

      {/* 7. Profile & Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif border-b border-slate-800 pb-4">
            講師プロフィール
          </h2>
          <div className="space-y-4 flex-1">
            <div className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">
              長谷川 誠（48歳）
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              軟式上がり・片手バックハンド・社会人になってからは「週1練習」の、どこにでもいる普通のおじさんプレーヤー。
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              2019年の県シングルス1回戦、前年チャンピオンのテニスコーチ相手に、ギャラリーの前で惨めなボロ負けをしたことをきっかけに、見栄やプライドを捨てて【テニスIQ】を徹底的に磨く。
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              その結果、プレースタイルを変えたり、新しい技術を身につけたりすることなく、相手のミスを引き出す「大人のズルい戦い方」だけで、44歳を過ぎてから急にベテランの県チャンピオンに。
            </p>
          </div>
        </div>

        {/* Achievements list */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-amber-400 font-serif border-b border-slate-800 pb-4">
            これまでの実績
          </h3>
          <div className="text-slate-300 text-sm sm:text-base leading-loose space-y-1">
            <div>2019年静岡県シングルス40歳以上1回戦負け</div>
            <div className="text-amber-400 font-bold py-1">↓</div>
            <div>2021年 静岡県シングルス40歳以上優勝</div>
            <div>2022年 浜松市スポーツ祭45歳以上優勝</div>
            <div>2022年 中遠シングルス45歳以上優勝</div>
            <div>2023年 静岡県シングルス45歳以上優勝</div>
            <div>2023年 ダンロップダブルス静岡県45歳以上優勝</div>
            <div>2023年 ダンロップダブルス静岡県代表</div>
            <div>2023年 ダンロップダブルス45歳以上東海大会3位</div>
            <div>2023年 宮城県民体育大会シングルス45歳以上優勝</div>
            <div>2024年 静岡県シングルス45歳以上優勝</div>
            <div>2024年 静岡トーナメント45歳以上優勝</div>
            <div>2024年 遠州シングルス45歳以上優勝</div>
            <div>2024年 静岡県クラブ対抗中部大会45歳以上優勝</div>
            <div>2024年 静岡県クラブ対抗45歳以上優勝</div>
            <div>2024年 中遠ダブルス45歳以上優勝</div>
            <div>2024年 宮城県民体育大会シングルス45歳以上優勝</div>
            <div>2025年 静岡県シングルス45歳以上優勝</div>
            <div>2025年 NWTCダブルス45歳以上優勝</div>
            <div>2025年 静岡県クラブ対抗中部大会45歳以上優勝</div>
            <div>2025年 遠州ミックス40歳以上優勝</div>
            <div>2025年 初生シングルス45歳以上優勝</div>
            <div>2025年 新日本スポーツ連盟45歳以上静岡県代表</div>
            <div>2025年 新日本スポーツ連盟45歳以上全国大会ベスト8</div>
            <div>2026年 静岡県シングルス35歳以上優勝</div>
            <div>2026年 新日本スポーツ連盟45歳以上静岡県代表</div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 text-center font-serif">
          よくある質問
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 shadow-md">
            <div className="text-amber-300 font-bold text-base sm:text-lg">
              Q.週一回スクールに通う程度ですが、効果はありますか？
            </div>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A.もちろんあります。むしろ練習量が少ない方にこそ、この『IQ戦略』がすぐに活かされるはずです！
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 shadow-md">
            <div className="text-amber-300 font-bold text-base sm:text-lg">
              Q.大人になってからテニスを始めたのですが、勝てるようになりますか？
            </div>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A.はい。テニスはテクニックや体力を競う競技ではないからこそ、キャリアが浅くても勝てる余地は十分あります。
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 shadow-md">
            <div className="text-amber-300 font-bold text-base sm:text-lg">
              Q.頭を使うのが苦手ですが、大丈夫ですか？
            </div>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A.はい、大丈夫です。なぜなら、試合中に「考える必要がない状態」を作るのがテニスIQだからです。
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 shadow-md">
            <div className="text-amber-300 font-bold text-base sm:text-lg">
              Q.女性でもテニスIQ戦略は使えますか？
            </div>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A.はい、もちろん男性女性関係なくお使いいただけます。特にロブ対策にお困りの女性には好評いただいております。
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 shadow-md">
            <div className="text-amber-300 font-bold text-base sm:text-lg">
              Q.テニスIQ戦略はシングルスだけですか？
            </div>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A.いいえ、シングルスだけではありません。ダブルスでも使える戦略もございますし、無料特典でもダブルス用の特典を用意していますので、ぜひ受け取ってください。
            </div>
          </div>
        </div>
      </section>

      {/* 9. Free Bonus Section */}
      <section id="bonus-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 scroll-mt-6">
        <div className="bg-gradient-to-br from-slate-900 to-amber-950/40 border-2 border-amber-500 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="text-center space-y-2">
            <p className="text-amber-400 font-bold text-lg sm:text-xl">
              ギリギリ勝てない相手に
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
              ギリギリ勝つための“無料特典”
            </h2>
          </div>

          {/* Bonus 1 */}
          <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl overflow-hidden shadow-xl transition-all hover:border-amber-500/60">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
              <div className="md:col-span-5 relative group overflow-hidden bg-slate-950">
                <img
                  src={bonusVideoImg}
                  alt="特典1：【動画で解説】緊張の正体を知って試合に勝つメンタル攻略法"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white font-bold text-xs px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                  <span>▶ 特別解説動画</span>
                </div>
              </div>
              <div className="md:col-span-7 p-6 sm:p-7 space-y-3">
                <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/40 text-amber-400 font-bold text-xs rounded-full">
                  BONUS 01
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-amber-300 font-serif leading-snug">
                  特典1：【動画で解説】緊張の正体を知って試合に勝つメンタル攻略法
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  試合になると、腕が縮こまってミスをしてしまう「チキり」や「パニック」を根絶するための特別動画です。緊張のメカニズムを科学的に理解することで、プレッシャーのかかる場面でも頭が真っ白にならず、練習通りにポイントを取り切る「ブレないメンタル」が手に入ります。
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>動画形式（スマホ・PCですぐにご視聴いただけます）</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl overflow-hidden shadow-xl transition-all hover:border-amber-500/60">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
              <div className="md:col-span-5 relative group overflow-hidden bg-slate-950">
                <img
                  src={bonusChecklistImg}
                  alt="特典2：【迷いが消える】ダブルスで勝つための『試合前3分チェックリスト』"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                  <span>📋 戦略チェックシート</span>
                </div>
              </div>
              <div className="md:col-span-7 p-6 sm:p-7 space-y-3">
                <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/40 text-amber-400 font-bold text-xs rounded-full">
                  BONUS 02
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-amber-300 font-serif leading-snug">
                  特典2：【迷いが消える】ダブルスで勝つための『試合前3分チェックリスト』
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  「いつポーチに出るか迷う」「センターのお見合いしてしまう」など、ダブルス特有の悩みを一気に解消するチェックリストです。試合前にペアと3分間確認するだけで迷いが一切なくなり、あなたが試合を支配して、ペアから「次もまた組んでほしい！」と頼られる存在へ生まれ変わります。
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>PDF＆印刷対応チェックリスト（保存して試合前に確認可能）</span>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Banner inside Bonus Section */}
          <div className="pt-6 text-center">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block w-full max-w-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-xl sm:text-3xl py-5 px-6 rounded-xl shadow-2xl border-2 border-amber-300 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer text-center group"
            >
              今すぐ無料特典を受け取る
            </a>
          </div>
        </div>
      </section>

      {/* 10. Contact Form */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-6">
        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 text-center font-serif">
            お問い合わせ・ご相談フォーム
          </h2>
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="text-4xl text-amber-500 mb-4">✓</div>
              <h3 className="text-xl font-bold text-slate-100">お問い合わせを受け付けました</h3>
              <p className="text-slate-400 text-sm">
                お問い合わせありがとうございます。<br />
                内容を確認の上、担当者よりご連絡させていただきます。
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-amber-500 hover:text-amber-400 text-sm underline transition-colors"
              >
                続けて送信する
              </button>
            </div>
          ) : (
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                try {
                  const response = await fetch('https://formsubmit.co/ajax/6889319a2addacee72236a4058224810', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                  });
                  
                  if (response.ok) {
                    form.reset();
                    setIsSubmitted(true);
                  } else {
                    alert('送信に失敗しました。時間をおいて再度お試しください。');
                  }
                } catch (error) {
                  alert('送信に失敗しました。時間をおいて再度お試しください。');
                } finally {
                  setIsSubmitting(false);
                }
              }} 
              className="space-y-4 max-w-md mx-auto text-slate-200"
            >
              <input type="hidden" name="_subject" value="【大人のテニスIQ戦略】お問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">
                  お名前：
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="お名前"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">
                  メールアドレス：
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="メールアドレス"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-300">
                  ご質問、ご相談内容：
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="ご質問、ご相談内容"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-amber-500 resize-none transition-colors"
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold py-3 px-4 rounded-lg transition-colors shadow-lg"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 11. Network Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 text-center font-serif">
            戦略発信ネットワーク
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <a
              href="https://www.youtube.com/@ojisan-tennis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 p-5 rounded-xl text-center transition-all hover:-translate-y-0.5 group flex items-center justify-center min-h-[72px]"
            >
              <div className="flex items-center justify-center gap-2 text-white font-bold text-lg">
                <svg className="w-6 h-6 text-red-500 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </div>
            </a>
            <a
              href="https://note.com/hasegawa053"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 p-5 rounded-xl text-center transition-all hover:-translate-y-0.5 group flex items-center justify-center min-h-[72px]"
            >
              <div className="flex items-center justify-center gap-2 text-white font-bold text-lg">
                <svg className="w-5 h-5 text-white fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2.5 13.5h-2.2v-4.5c0-.8-.5-1.3-1.3-1.3s-1.3.5-1.3 1.3v4.5H9.5V9.5h2.2v.9c.4-.6 1.1-1 1.9-1 1.5 0 2.9 1.1 2.9 2.7v4.4z"/>
                </svg>
                <span>note</span>
              </div>
            </a>
            <a
              href="https://x.com/ojisantennis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 p-5 rounded-xl text-center transition-all hover:-translate-y-0.5 group flex items-center justify-center min-h-[72px]"
            >
              <div className="flex items-center justify-center gap-2 text-white font-bold text-lg">
                <svg className="w-6 h-6 text-white fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <a href="https://privacy-iota-pied.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors cursor-pointer">プライバシーポリシー</a>
            <a href="https://tennis-iq-transactions.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors cursor-pointer">特定商取引法に基づく表記</a>
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              お問い合わせ
            </a>
          </div>
          <p className="text-xs text-slate-500 text-center pt-2">
            © 大人のテニスIQ戦略 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
