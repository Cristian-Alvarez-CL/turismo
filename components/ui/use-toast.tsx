import { useToast as useToastOriginal } from "@/components/ui/toaster"

export const useToast = () => {
  const { toast } = useToastOriginal()

  return {
    toast: {
      success: toast,
      error: (props: Parameters<typeof toast>[0]) => toast({ ...props, variant: "destructive" }),
    },
  }
}