"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { translations } from "@/i18n/translations";

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <main className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="text-right">
        <Button variant="outline" onClick={() => setLang(lang === "en" ? "zh" : "en")}>{lang === "en" ? "中文" : "EN"}</Button>
      </div>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t.greeting}</h1>
        <p className="text-lg text-gray-600">{t.summary}</p>
        <Button className="mt-4">{t.viewProjects}</Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">{t.hybridTitle}</h2>
            <p className="text-sm text-gray-600 mt-2">{t.hybridDesc}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">{t.bioTitle}</h2>
            <p className="text-sm text-gray-600 mt-2">{t.bioDesc}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">{t.trendTitle}</h2>
            <p className="text-sm text-gray-600 mt-2">{t.trendDesc}</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold">{t.connect}</h2>
        <p className="text-gray-600">{t.open}</p>
        <div className="mt-4 space-x-4">
          <Button variant="outline">GitHub</Button>
          <Button variant="outline">LinkedIn</Button>
          <Button variant="outline">Email</Button>
        </div>
      </section>
    </main>
  );
}

// Sample content of i18n/translations.ts

export const translations = {
  en: {
    greeting: "Hi, I'm an AI Engineer",
    summary: "Specializing in Recommendation Systems, Biomedical AI, and Time Series Forecasting.",
    viewProjects: "View My Projects",
    hybridTitle: "Hybrid Recommendation System",
    hybridDesc: "A cold-start friendly recommender combining collaborative filtering and real-time data.",
    bioTitle: "Biomedical Signal Predictor",
    bioDesc: "Predicting blood pressure using ECG-PPG signals with LSTM models.",
    trendTitle: "AI Trend Forecast Dashboard",
    trendDesc: "A full-stack tool for real-time trend analysis with A/B testing integration.",
    connect: "Let's Connect",
    open: "Open for remote roles, collaborations, and speaking opportunities."
  },
  zh: {
    greeting: "嗨，我是一位 AI 工程師",
    summary: "專長於推薦系統、生醫 AI、與時間序列預測。",
    viewProjects: "查看我的專案",
    hybridTitle: "混合型推薦系統",
    hybridDesc: "結合協同過濾與即時數據的冷啟動推薦器。",
    bioTitle: "生醫訊號預測器",
    bioDesc: "使用 LSTM 模型根據 ECG-PPG 訊號預測血壓。",
    trendTitle: "AI 趨勢預測儀表板",
    trendDesc: "整合 A/B 測試的即時趨勢分析全端工具。",
    connect: "聯絡我",
    open: "開放遠端職位、合作與演講邀請。"
  }
};
