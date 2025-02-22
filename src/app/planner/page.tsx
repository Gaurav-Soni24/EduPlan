'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import axios from 'axios';

const LessonPlannerForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        topic: '',
        date: '',
        subject: '',
        gradeLevel: '',
        mainConcept: '',
        subTopics: '',
        materialsNeeded: '',
        learningObjectives: '',
        springboardActivity: '',
        mainDiscussion: '',
        guidedActivities: '',
        assessment: '',
        notes: ''
    });

    const [generatedContent, setGeneratedContent] = useState<string | null>(null);

    const handleInputChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsLoading(true);

        const prompt = `
📚 **Lesson Plan: ${formData.topic}** 

📅 **Date:** ${formData.date}  
📖 **Subject:** ${formData.subject}  
🎓 **Grade Level:** ${formData.gradeLevel}  

## 📝 Summary
### 🌟 Main Concept:
${formData.mainConcept}

### 📌 Subtopics:
${formData.subTopics}

## 🛠 Materials Needed:
${formData.materialsNeeded}

## 🎯 Learning Objectives:
${formData.learningObjectives}

## 📚 Lesson Outline:
### 🚀 1. Springboard Activity (15 minutes):
${formData.springboardActivity}

### 🗣️ 2. Main Discussion (30 minutes):
${formData.mainDiscussion}

### 🎭 3. Guided Activities (30 minutes):
${formData.guidedActivities}

### 📝 4. Assessment (15 minutes):
${formData.assessment}

## 📌 Notes and Reminders:
${formData.notes}

💡 *Ensure engagement and interactive discussions to maximize learning!*
`;

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
                {
                    contents: [
                        {
                            parts: [{ text: prompt }]
                        }
                    ]
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
            setGeneratedContent(generatedText);
        } catch (error) {
            console.error('Error generating lesson plan:', error);
            setGeneratedContent("❌ An error occurred while generating the lesson plan.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-12">Lesson Planner</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Form Section */}
                <div className="lg:max-h-screen lg:overflow-y-auto print:hidden">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle>Create New Lesson Plan</CardTitle>
                                <Button variant="outline" onClick={() => setFormData({
                                    topic: '',
                                    date: '',
                                    subject: '',
                                    gradeLevel: '',
                                    mainConcept: '',
                                    subTopics: '',
                                    materialsNeeded: '',
                                    learningObjectives: '',
                                    springboardActivity: '',
                                    mainDiscussion: '',
                                    guidedActivities: '',
                                    assessment: '',
                                    notes: ''
                                })}>
                                    Reset Form
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="basic-info">
                                        <AccordionTrigger>Basic Information</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Topic</label>
                                                    <Input
                                                        name="topic"
                                                        value={formData.topic}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter lesson topic"
                                                        required
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Date</label>
                                                        <Input
                                                            type="date"
                                                            name="date"
                                                            value={formData.date}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Subject</label>
                                                        <Input
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={handleInputChange}
                                                            placeholder="Enter subject"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium mb-1">Grade Level</label>
                                                        <Input
                                                            name="gradeLevel"
                                                            value={formData.gradeLevel}
                                                            onChange={handleInputChange}
                                                            placeholder="Enter grade level"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="concepts">
                                        <AccordionTrigger>Concepts and Materials</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Main Concept</label>
                                                    <textarea
                                                        name="mainConcept"
                                                        value={formData.mainConcept}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter main concept"
                                                        required
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Sub Topics</label>
                                                    <textarea
                                                        name="subTopics"
                                                        value={formData.subTopics}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter sub topics"
                                                        required
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Materials Needed</label>
                                                    <textarea
                                                        name="materialsNeeded"
                                                        value={formData.materialsNeeded}
                                                        onChange={handleInputChange}
                                                        placeholder="List all required materials"
                                                        required
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="lesson-content">
                                        <AccordionTrigger>Lesson Content</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Learning Objectives</label>
                                                    <textarea
                                                        name="learningObjectives"
                                                        value={formData.learningObjectives}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter learning objectives (use Bloom's Taxonomy)"
                                                        required
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Springboard Activity (15 mins)</label>
                                                    <textarea
                                                        name="springboardActivity"
                                                        value={formData.springboardActivity}
                                                        onChange={handleInputChange}
                                                        placeholder="Describe the opening activity"
                                                        required
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Main Discussion (30 mins)</label>
                                                    <textarea
                                                        name="mainDiscussion"
                                                        value={formData.mainDiscussion}
                                                        onChange={handleInputChange}
                                                        placeholder="Outline the main discussion points"
                                                        required
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Guided Activities (30 mins)</label>
                                                    <textarea
                                                        name="guidedActivities"
                                                        value={formData.guidedActivities}
                                                        onChange={handleInputChange}
                                                        placeholder="Describe the activities"
                                                        required
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Assessment (15 mins)</label>
                                                    <textarea
                                                        name="assessment"
                                                        value={formData.assessment}
                                                        onChange={handleInputChange}
                                                        placeholder="Describe assessment methods"
                                                        required
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Notes and Reminders</label>
                                                    <textarea
                                                        name="notes"
                                                        value={formData.notes}
                                                        onChange={handleInputChange}
                                                        placeholder="Add any additional notes or reminders"
                                                        className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                                                    />
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? 'Generating...' : 'Generate Lesson Plan'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Generated Content Section */}
                <div className="lg:max-h-screen lg:overflow-y-auto">
                    {isLoading ? (
                        <Card>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                                    <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                                    <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
                                </div>
                            </CardContent>
                        </Card>
                    ) : generatedContent ? (
                        <Card>
                            <CardContent className="p-6 whitespace-pre-line">
                                <div className="text-gray-800">{generatedContent}</div>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card>
                            <CardContent className="p-6 text-center text-gray-500">
                                Fill out the form and generate your lesson plan to see the results here.
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonPlannerForm;
