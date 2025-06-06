import React from 'react';
import {
  BookOpen,
  Users,
  TrendingUp,
  Clock,
  Star,
  MessageSquare,
  Award,
  Calendar,
  PlusCircle,
  BarChart3,
  FileText,
  PlayCircle
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function TeacherDashboard() {
  const { user } = useAuth();

  const stats = [
    { name: 'Active Courses', value: '8', icon: BookOpen, color: 'bg-blue-500', change: '+2 this month' },
    { name: 'Total Students', value: '324', icon: Users, color: 'bg-green-500', change: '+45 this month' },
    { name: 'Avg. Rating', value: '4.8', icon: Star, color: 'bg-yellow-500', change: '+0.2 this month' },
    { name: 'Hours Taught', value: '156', icon: Clock, color: 'bg-purple-500', change: '+24 this week' },
  ];

  const courses = [
    {
      id: 1,
      title: 'React Development Masterclass',
      students: 89,
      rating: 4.9,
      revenue: '$2,340',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=300',
      status: 'Published',
      completion: 76
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      students: 67,
      rating: 4.7,
      revenue: '$1,820',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=300',
      status: 'Published',
      completion: 82
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      students: 54,
      rating: 4.8,
      revenue: '$1,450',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=300',
      status: 'Draft',
      completion: 45
    }
  ];

  const recentActivity = [
    { id: 1, type: 'assignment', message: 'New assignment submitted by Alex Johnson', time: '2 hours ago', course: 'React Masterclass' },
    { id: 2, type: 'question', message: 'Sarah Wilson asked a question in JavaScript course', time: '4 hours ago', course: 'Advanced JavaScript' },
    { id: 3, type: 'enrollment', message: '3 new students enrolled in React course', time: '6 hours ago', course: 'React Masterclass' },
    { id: 4, type: 'review', message: 'New 5-star review from Michael Chen', time: '1 day ago', course: 'Node.js Backend' }
  ];

  const upcomingClasses = [
    { id: 1, title: 'React Hooks Deep Dive', time: 'Today 2:00 PM', students: 24, type: 'Live Session' },
    { id: 2, title: 'JavaScript Q&A Session', time: 'Tomorrow 10:00 AM', students: 18, type: 'Office Hours' },
    { id: 3, title: 'Project Review Session', time: 'Friday 3:00 PM', students: 15, type: 'Workshop' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}! 👨‍🏫</h1>
            <p className="text-purple-100 mb-4">Your teaching impact is growing every day</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>324 Students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>Master Educator</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?w=200"
              alt="Teaching illustration"
              className="w-32 h-32 object-cover rounded-lg opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-green-600 dark:text-green-400">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Performance */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Courses</h2>
              <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Course
              </button>
            </div>
            <div className="p-6 space-y-6">
              {courses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {course.title}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        course.status === 'Published' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {course.students} students
                      </span>
                      <span className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                        {course.rating}
                      </span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {course.revenue}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                        <span>Course Completion</span>
                        <span>{course.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.completion}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <button className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      Analytics
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Classes */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Classes</h2>
            </div>
            <div className="p-6 space-y-4">
              {upcomingClasses.map((class_) => (
                <div key={class_.id} className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {class_.title}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{class_.time}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {class_.students} students • {class_.type}
                    </p>
                  </div>
                  <PlayCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'assignment' ? 'bg-green-500' :
                    activity.type === 'question' ? 'bg-blue-500' :
                    activity.type === 'enrollment' ? 'bg-purple-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-white">
                      {activity.message}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.course}
                      </p>
                      <span className="text-xs text-gray-300">•</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}