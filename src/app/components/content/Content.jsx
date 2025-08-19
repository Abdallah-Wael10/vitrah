import React from "react";
import {
  Shield,
  Heart,
  Star,
  Clock,
  Users,
  CheckCircle,
  Phone,
  Calendar,
  Sparkles,
  Award,
  ArrowRight,
  Target,
} from "lucide-react";

const Content = () => {
  return (
    <section className="bg-[#1C1C1C] py-8 sm:py-12 lg:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#ff5003]/20 to-[#ff5003]/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-[#ff5003] text-sm sm:text-base font-bold mb-4 sm:mb-6 border border-[#ff5003]/40 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            كشف مجاني مخصوص لطفلك
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5 sm:mb-7">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              دلوقتي تقدري تكشفي
            </span>
            <span className="block bg-gradient-to-r from-[#ff5003] via-[#ff6b35] to-[#ff5003] bg-clip-text text-transparent mt-1 sm:mt-2">
              على ابنك مجانًا
            </span>
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mt-1 sm:mt-2">
              Vitrah في عيادات
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 font-medium px-4 sm:px-0">
            للكشف المبكر عن السمنة ومخاطرها. الكشف المبكر يساعدك تحمي صحة طفلك
            الجسدية والنفسية.
          </p>

          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#ff5003] to-[#ff5003] rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:ml-6">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#1C1C1C] sm:pl-6">
                لأن كل طفل يستحق
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base text-[#1C1C1C]">
              <span className="flex items-center gap-1 bg-gradient-to-r from-white/80 to-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md border border-[#1C1C1C]/10 transition-transform hover:scale-105 max-[900px]:flex max-[900px]:justify-center max-[900px]:items-center max-[900px]:gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5003] ml-2 sm:ml-4" />
                يحس إنه قوي
              </span>
              <span className="flex items-center gap-1 bg-gradient-to-r from-white/80 to-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md border border-[#1C1C1C]/10 transition-transform hover:scale-105 max-[900px]:flex max-[900px]:justify-center max-[900px]:items-center max-[900px]:gap-2">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5003] ml-2 sm:ml-4" />
                مرتاح
              </span>
              <span className="flex items-center gap-1 bg-gradient-to-r from-white/80 to-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md border border-[#1C1C1C]/10 transition-transform hover:scale-105 max-[900px]:flex max-[900px]:justify-center max-[900px]:items-center max-[900px]:gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5003] ml-2 sm:ml-4" />
                واثق في نفسه
              </span>
            </div>
          </div>
        </div>

        {/* Why Early Detection Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            <div className="order-2 lg:order-1 max-[900px]:flex max-[900px]:justify-center max-[900px]:items-center max-[900px]:gap-2">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-7 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 max-[650px]:w-[90%] max-[900px]:w-[70%] max-[900px]:flex max-[900px]:justify-center max-[900px]:items-center max-[900px]:flex-col ">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#1C1C1C]/10 to-[#1C1C1C]/5 rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:ml-6">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff5003]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1C1C1C] text-center sm:text-right sm:pl-6">
                    ليه الكشف المبكر مهم؟
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#1C1C1C]/10 rounded-full flex items-center justify-center ml-3 sm:ml-6 mt-1 flex-shrink-0 group-hover:bg-[#1C1C1C]/20 transition-colors">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff5003]" />
                    </div>
                    <p className="text-sm sm:text-base text-[#1C1C1C] leading-relaxed font-medium">
                      يساعدك تتابعي نمو طفلك بشكل سليم وصحي
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#1C1C1C]/10 rounded-full flex items-center justify-center ml-3 sm:ml-6 mt-1 flex-shrink-0 group-hover:bg-[#1C1C1C]/20 transition-colors">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff5003]" />
                    </div>
                    <p className="text-sm sm:text-base text-[#1C1C1C] leading-relaxed font-medium">
                      تفهمي لو في مشكلة قبل ما تكبر وتبقى صعبة
                    </p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#1C1C1C]/10 rounded-full flex items-center justify-center ml-3 sm:ml-6 mt-1 flex-shrink-0 group-hover:bg-[#1C1C1C]/20 transition-colors">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff5003]" />
                    </div>
                    <p className="text-sm sm:text-base text-[#1C1C1C] leading-relaxed font-medium">
                      تاخدي القرار الصح بدري، بهدوء، وبمنتهى الدعم
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-right">
              <div className="inline-flex items-center gap-1 bg-[#ff5003]/20 rounded-full px-3 sm:px-4 py-2 text-[#ff5003] text-sm sm:text-base font-bold mb-3 sm:mb-4 backdrop-blur-sm border border-[#ff5003]/30">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3" />
                هدفنا واضح
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">
                علشان احنا دايما مؤمنين إن
                <span className="block text-[#ff5003] mt-1">بداية الحل</span>
                <span className="block text-white mt-1">بتبدأ من الوعي</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">
                ومن خطوة بسيطة زي المتابعة المبكرة. إحنا موجودين علشان نساعدك.
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="backdrop-blur-3xl bg-transparent rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center mb-12 sm:mb-16 lg:mb-20 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:ml-7">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black sm:pl-7">
              إحنا معاكي في كل خطوة
            </h3>
          </div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-95 max-w-2xl mx-auto font-medium">
            وإحنا موجودين علشان نساعدك تاخدي القرار الصح بدري، بهدوء، وبمنتهى
            الدعم
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#FF5003] to-transparent mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#ff5003] to-[#ff5003] rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:ml-7">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1C1C1C] sm:pl-7">
                احجزي دلوقتي
              </h3>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-[#1C1C1C] mb-6 sm:mb-8 leading-relaxed font-medium">
              وابدئي أول خطوة. مجانًا
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
              <a
                href="#bitrix-form-root"
                className="w-full sm:w-auto group relative bg-gradient-to-r from-[#ff5003] to-[#ff5003] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-black rounded-xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-[#ff5003]/50 transform hover:-translate-y-2 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 ml-4 sm:ml-6" />
                  احجزي موعد مجاني
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>

            <div className="bg-gradient-to-r from-[#1C1C1C]/10 to-white rounded-xl p-4 sm:p-6 text-center border border-[#1C1C1C]/20">
              <p className="text-lg sm:text-2xl md:text-3xl font-black text-[#1C1C1C] mb-2">
                صحة ابنك بتبدأ منك...
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[#ff5003] font-black flex items-center justify-center">
                وبيكمل معانا
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-[#ff5003] animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
