"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { submitInquiry } from "@/lib/api";

export function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitInquiry(data);
      setStatus("success");
      setData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div className="space-y-2">
        <Label htmlFor="name">お名前 *</Label>
        <Input id="name" required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">メールアドレス *</Label>
        <Input id="email" type="email" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">電話番号</Label>
        <Input id="phone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">お問い合わせ内容 *</Label>
        <Textarea id="message" required rows={5} value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} />
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "送信中..." : "送信する"}
      </Button>
      {status === "success" && (
        <p className="text-green-600 text-sm">お問い合わせを受け付けました。ありがとうございます。</p>
      )}
      {status === "error" && (
        <p className="text-destructive text-sm">送信に失敗しました。もう一度お試しください。</p>
      )}
    </form>
  );
}
