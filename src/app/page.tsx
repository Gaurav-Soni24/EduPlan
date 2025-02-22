import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { 
    Brain, 
    Clock, 
    FileText, 
    Download, 
    Edit, 
    Save,
    ArrowRight,
    BookOpen,
    Sparkles 
} from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <div className="inline-block">
                        <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-4">
                            <Sparkles className="w-4 h-4" />
                            <span>AI-Powered Lesson Planning</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Create Professional Lesson Plans in Minutes
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Transform your teaching preparation with our AI-powered lesson planner. 
                        Generate detailed, customizable lesson plans instantly.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/login">
                            <Button size="lg" className="gap-2">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button variant="outline" size="lg">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div id="features" className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Everything You Need for Effective Lesson Planning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="p-6 space-y-4">
                        <Brain className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">AI-Powered Generation</h3>
                        <p className="text-muted-foreground">
                            Leverage advanced AI to generate comprehensive lesson plans aligned with educational standards.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4">
                        <Clock className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">Save Time</h3>
                        <p className="text-muted-foreground">
                            Create detailed lesson plans in minutes instead of hours. Focus more on teaching, less on planning.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4">
                        <Edit className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">Customizable Templates</h3>
                        <p className="text-muted-foreground">
                            Easily customize generated plans to match your teaching style and classroom needs.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4">
                        <FileText className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">Structured Format</h3>
                        <p className="text-muted-foreground">
                            Well-organized sections for objectives, activities, materials, and assessments.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4">
                        <Download className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">Export as PDF</h3>
                        <p className="text-muted-foreground">
                            Download your lesson plans in PDF format for easy sharing and printing.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4">
                        <Save className="w-12 h-12 text-primary" />
                        <h3 className="text-xl font-semibold">Auto-Save Feature</h3>
                        <p className="text-muted-foreground">
                            Never lose your work with automatic saving of drafts and completed plans.
                        </p>
                    </Card>
                </div>
            </div>

            {/* How It Works */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    How It Works
                </h2>
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">1</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Enter Your Lesson Details</h3>
                                <p className="text-muted-foreground">Fill in basic information about your lesson including topic, grade level, and learning objectives.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">2</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Generate Your Plan</h3>
                                <p className="text-muted-foreground">Our AI generates a comprehensive lesson plan based on your input, including activities and assessments.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">3</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Customize and Download</h3>
                                <p className="text-muted-foreground">Edit the generated plan to match your needs, then download it as a PDF or print it directly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-20">
                <Card className="bg-primary text-primary-foreground p-12">
                    <CardContent className="text-center space-y-6">
                        <BookOpen className="w-16 h-16 mx-auto" />
                        <h2 className="text-3xl font-bold">Ready to Transform Your Lesson Planning?</h2>
                        <p className="text-xl max-w-2xl mx-auto">
                            Join thousands of teachers who are saving time and creating better lesson plans with our AI-powered platform.
                        </p>
                        <Link href="/planner">
                            <Button size="lg" variant="secondary" className="mt-4">
                                Start Creating Your Lesson Plan
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

            {/* Footer */}
            <footer className="border-t">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-sm text-muted-foreground">
                        © 2025 AI Lesson Planner. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;